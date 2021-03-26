import { NextApiRequest, NextApiResponse } from "next";
import { getScreenshot } from "./_lib/chromiun";
import getThumbnailTemplate from "./_lib/thumbTemplate";

const isDev = !process.env.AWS_REGION;

export default async function (req : NextApiRequest, res: NextApiResponse) {
   try {

      const baseUrl = process.env.NODE_ENV === 'development'
         ? 'http://localhost:3000'
         : process.env.NEXT_PUBLIC_BASE_URL;


      const level = String(req.query.level);
      const challenges = String(req.query.challenges);
      const exp = String(req.query.exp);

      if (level === "undefined") {
         throw new Error("Title is require");
      }

      const html = getThumbnailTemplate(level, challenges, exp, baseUrl);

      const file = await getScreenshot(html, isDev);

      res.setHeader('Content-Type', 'image/png');
      res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000');

      return res.end(file);

   } catch (error) {
      console.error(error);
      
      res.status(500).send('Internal server error');
   }
}