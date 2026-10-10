export const canManageServer = (user, server) => Boolean(user && server && (server.ownerId === user.id || server.managers.includes(user.id)));
export const canDiscover = memory => memory.visibility === 'public' && !memory.removed;
export const flashbacksFor = (memories, peerId, exchanges) => exchanges >= 3 ? memories.filter(m => m.authorId === peerId && canDiscover(m)) : [];
export const popularitySize = likes => Math.min(190, Math.max(112, 112 + Math.log10(Math.max(0, likes) + 1) * 23));
