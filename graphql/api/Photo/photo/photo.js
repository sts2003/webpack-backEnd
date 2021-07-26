import Photo from "../../../model/Photo";

export default {
  Query: {
    getAllPhotos: async (_, args) => {
      try {
        const result = await Photo.find({}, {});

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
