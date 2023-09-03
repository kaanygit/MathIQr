// import { NextApiRequest, NextApiResponse } from 'next';
// import startDatabase from "@/lib/db";
// import CommunityData, { CommunityPostDocument } from '@/lib/models/community-model';



// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   await startDatabase();
//   console.log('database aktif');

//   if (req.method === 'POST') {
//     try {
//       // İstek gövdesinden gelen verileri alın
//       const {
//         userPhoto,
//         userName,
//         grade,
//         subject,
//         creationDate,
//         photos,
//         problemDescription,
//         solutions,
//         areWeFriends,
//         problemDomain,
//       } = req.body;

//       // Veriyi oluşturun
//       const newPost: CommunityPostDocument = new CommunityData({
//         userPhoto,
//         userName,
//         grade,
//         subject,
//         creationDate,
//         photos,
//         problemDescription,
//         solutions,
//         areWeFriends,
//         problemDomain,
//       });

//       // Veriyi kaydedin
//       const savedPost = await newPost.save();

//       res.status(201).json(savedPost);
//     } catch (error) {
//       res.status(500).json({ error: 'Veri eklenirken bir hata oluştu.' });
//     }
//   } else {
//     res.status(405).json({ error: 'Yanlış istek yöntemi.' });
//   }
// };



import { NextApiRequest, NextApiResponse } from 'next';
import startDatabase from "@/lib/db";
import CommunityData, { CommunityPostDocument } from '@/lib/models/community-model';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await startDatabase();

  if (req.method === 'POST') {
    try {
      // İstek gövdesinden gelen verileri alın
      const {
        userPhoto,
        userName,
        grade,
        subject,
        creationDate,
        photos,
        problemDescription,
        solutions,
        areWeFriends,
        problemDomain,
      } = req.body;

      // Veriyi oluşturun
      const newPost: CommunityPostDocument = new CommunityData({
        userPhoto,
        userName,
        grade,
        subject,
        creationDate,
        photos,
        problemDescription,
        solutions,
        areWeFriends,
        problemDomain,
      });

      // Veriyi kaydedin
      const savedPost = await newPost.save();

      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: 'Veri eklenirken bir hata oluştu.' });
    }
  } else {
    res.status(405).json({ error: 'Yanlış istek yöntemi.' });
  }
}
