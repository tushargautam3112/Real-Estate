 
//from line no 114
 export const profilePosts = async(req ,res) => {
    const tokenUserId= req.params.userId;
      
    try {
       const userPosts = await prisma.post.findMany({
         where : { userId : tokenUserId },
       });

       const saved = await prisma.post.findMany({
        where : { userId : tokenUserId },
        includes : {
            post :true ,
        },
      });

      const savedPosts = saved.map( item=>item.post)
      res.status(200).json({userPosts , savedPosts});

    } catch (err){
      console.log(err);
      res.status(500).json({ message : "Failed to get profile post "});
    }
};