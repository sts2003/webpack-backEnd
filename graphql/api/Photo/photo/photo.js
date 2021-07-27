import Photo from "../../../model/Photo";

export default {
  Query: {
    getAllPhotos: async (_, args) => {
      const { searchValue, limit, currentPage } = args;
      try {
        const result = await Photo.find(
          {
            name: { $regex: `.*${searchValue}.*` },
          },
          {}
        )
          .limit(limit)
          .skip(currentPage * limit);

        return result;
      } catch (e) {
        console.log(e);
        return [];
      }
    },
    getPhotoDetail: async (_, args) => {
      const { id } = args;
      try {
        const result = await Photo.findOne({
          _id: id,
        });

        return result;
      } catch (e) {
        console.log(e);
        return {};
      }
    },
    getPhotoTotalPage: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await Photo.find({
          name: { $regex: `.*${searchValue}.*` },
        });

        const cnt = result.length;

        const realTotalPage = cnt % limit > 0 ? cnt / limit + 1 : cnt / limit;

        return parseInt(realTotalPage);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
    getPhotoTotalPageOnlyCnt: async (_, args) => {
      const { searchValue, limit } = args;

      try {
        const result = await Photo.find({
          name: { $regex: `.*${searchValue}.*` },
        });

        const cnt = result.length;
        console.log(result);
        return parseInt(cnt);
      } catch (e) {
        console.log(e);
        return 0;
      }
    },
  },

  Mutation: {
    createNewPhoto: async (_, args) => {
      const { name, imagePath, description } = args;
      try {
        const result = await Photo.create({
          name,
          imagePath,
          description,
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    updatePhoto: async (_, args) => {
      const { id, name, imagePath, description } = args;

      try {
        const result = await Photo.updateOne(
          {
            _id: id,
          },
          {
            $set: {
              name,
              imagePath,
              description,
            },
          }
        );

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },

    deletePhoto: async (_, args) => {
      const { id } = args;
      try {
        const result = await Photo.deleteOne({
          _id: id,
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
  },
};
