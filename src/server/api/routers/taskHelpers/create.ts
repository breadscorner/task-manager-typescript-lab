import { protectedProcedure } from "../../trpc";
import { z } from "zod";

export default protectedProcedure
  .input(
    z.object({
      title: z.string(),
    })
  )
  .mutation(async ({ ctx, input }) => {
    await ctx.prisma.task.create({
      data: {
        title: input.title,
        completed: false,
        userId: ctx.session.user.id,
      },
    });
  });
