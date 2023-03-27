import { protectedProcedure } from "../../trpc";

export default protectedProcedure.query(async ({ ctx }) => {
  const tasks = await ctx.prisma.task.findMany({
    where: {
      userId: ctx.session.user.id,
    },
  });
  return tasks;
});
