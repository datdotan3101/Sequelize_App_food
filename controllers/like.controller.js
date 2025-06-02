import likeService from "../services/like.service";

const likeController = {
  findAll: async (req, res, next) => {
    const result = await likeService.findAll();
    res.json(result);
  },
  likeUser: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const result = await likeService.likeUser(userId);

      if (result.length === 0) {
        return res
          .status(404)
          .json({ message: "User has not liked any restaurant." });
      }

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
  likeRes: async (req, res, next) => {
    try {
      const resId = req.params.id;
      const result = await likeService.likeRes(resId);

      if (result.length === 0) {
        return res
          .status(404)
          .json({ message: "User has not liked any restaurant." });
      }

      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  },
};

export default likeController;
