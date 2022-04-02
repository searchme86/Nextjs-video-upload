import cloudinary from 'cloudinary';
import { IncomingForm } from 'formidable';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECREAT,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(error);
      resolve({ fields, files });
    });
  });

  const file = data?.files?.inputFile.path;

  const response = await cloudinary.v2.uploader.upload(file, {
    resource_type: 'video',
    public_id: 'my_video',
  });
  return res.json(response);
};

export default upload;
