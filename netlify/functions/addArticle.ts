
import { Handler } from '@netlify/functions'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

interface ArticleEntry {
  name: string,
  description: string,
  price: string
}

const handler: Handler = async (event, context) => {
  if(event.body) {
    const newArticle = JSON.parse(event.body) as ArticleEntry;
    await prisma.articles.create({
      data: {
        name: newArticle.name,
        description: newArticle.description,
        price: parseInt(newArticle.price)
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(newArticle)
    };
  }

  return {
    statusCode: 500
  };
}


export { handler }