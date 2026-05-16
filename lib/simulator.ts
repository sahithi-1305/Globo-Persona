import prisma from './prisma';

export async function stepSimulation() {
  const state = await prisma.engineState.findUnique({ where: { id: 'singleton' } });
  if (state?.status !== 'running') return { message: 'Simulation is paused' };

  const accounts = await prisma.account.findMany({ where: { status: 'active' } });
  if (accounts.length < 2) return { message: 'Need at least 2 active accounts to simulate' };

  // 1. Shuffle sender/receivers intelligently
  const shuffled = [...accounts].sort(() => 0.5 - Math.random());
  
  for (let i = 0; i < shuffled.length; i++) {
    const sender = shuffled[i];
    const receiver = shuffled[(i + 1) % shuffled.length];

    if (sender.currentSends >= sender.dailyLimit) continue;

    // Simulate sending email
    await prisma.emailLog.create({
      data: {
        senderId: sender.id,
        receiverId: receiver.id,
        subject: `Simulation Email from ${sender.email}`,
        body: 'This is an automatically generated email.',
        type: 'initial',
        status: 'delivered'
      }
    });

    await prisma.account.update({
      where: { id: sender.id },
      data: { currentSends: { increment: 1 } }
    });

    // Update Daily Analytics for Sent Email
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    await prisma.analyticsDaily.upsert({
      where: { date: today },
      update: { emailsSent: { increment: 1 } },
      create: { date: today, emailsSent: 1 }
    });

    // 2. Positive Reply Simulation (30% chance)
    if (Math.random() < 0.3) {
      await prisma.emailLog.create({
        data: {
          senderId: receiver.id,
          receiverId: sender.id,
          subject: `Re: Simulation Email from ${sender.email}`,
          body: 'Thanks for the email! This is a positive reply.',
          type: 'reply',
          status: 'replied'
        }
      });
      
      // Update reputation score
      await prisma.account.update({
        where: { id: sender.id },
        data: { reputationScore: { increment: 0.5 } }
      });

      // Update Daily Analytics for Positive Reply
      await prisma.analyticsDaily.upsert({
        where: { date: today },
        update: { positiveReplies: { increment: 1 }, emailsReceived: { increment: 1 } },
        create: { date: today, positiveReplies: 1, emailsReceived: 1 }
      });
    }

    // 3. Dynamic Activity Scaling
    // If account hits limit and reputation is good, increase limit
    if (sender.currentSends + 1 >= sender.dailyLimit && sender.reputationScore > 55) {
      const increment = Math.floor(Math.random() * 5) + 1; // 1 to 5
      await prisma.account.update({
        where: { id: sender.id },
        data: { dailyLimit: { increment } }
      });
    }
  }

  return { message: 'Simulation step completed' };
}
