const data = {
  likes: true,
  dislikes: false
};

/**
 * A example that defines complex policies - boolean OR and AND.
 */
export default {
  create: {
    $or: [
      {
        $and: [{ any: ["bar.a", "bar.b"] }, { all: ["bar.m", "bar.n"] }]
      },
      { any: ["bar.j", "bar.k"] }
    ]
  },
  edit: {
    $or: [
      {
        $and: [{ any: ["bar.p", "bar.q"] }, () => data.likes]
      },
      { any: ["bar.n", "bar.o"] }
    ]
  },
  list: {
    $and: [
      {
        $or: [{ any: ["bar.c", "bar.d"] }, { all: ["bar.e", "bar.f"] }]
      },
      { all: ["bar.l", "bar.m"] }
    ]
  },
  remove: {
    $or: [
      {
        $and: [{ any: ["bar.g", "bar.h"] }, { all: ["bar.i", "bar.j"] }]
      },
      { $or: [{ any: ["bar.r", "bar.s"] }, () => data.dislikes] }
    ]
  }
};