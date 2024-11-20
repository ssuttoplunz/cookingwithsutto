import itemsData from './data.json';
import express, { Application, Request, Response } from 'express';
import cors from 'cors';

type RecipeRequestParams = {
  id?: string
}
type Blurb = {
  text: string
  imageUrl?: string
  title?: string
  imagePosition?: string // TODO: can be more specific about types later
}
 
type RecipeResponseBody = {
  id: string
  title: string
  date: string
  hardsrc: string
  ingredients?: string[]
  blurbs: Blurb[]
}

const getItemsDataById = (id: string): RecipeResponseBody => {
  return itemsData.filter((item: RecipeResponseBody) => item.id === id)[0];
};

const app: Application = express();
app.use(cors()); // Enable CORS

// TODO: add validation using something like zod or joi
// TODO: document API endpoints w/ swagger or openapi

app.get('/api/recipes', (req: Request, res: Response) => {
  const queryParams = req.query as RecipeRequestParams;
  const id = queryParams?.id;
  if (id) {
    res.json(getItemsDataById(id));
  } else {
    res.json(itemsData);
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});