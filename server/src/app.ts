import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import itemsData from './data.json';
import pool from './db';
import { QueryResult } from 'mysql2';

type RecipeRequestParams = {
  id?: string
}
type Step = {
  text: string
  image_url?: string
  title?: string
  image_position?: string // TODO: can be more specific about types later
}
 
type RecipeResponseBody = {
  id: string
  title: string
  date: string
  image_url: string
}

const app: Application = express();
app.use(cors()); // Enable CORS

// TODO: add validation using something like zod or joi
// TODO: document API endpoints w/ swagger or openapi

app.get('/api/recipes', async (req: Request, res: Response) => {
  try {
    const [recipes] = await pool.query('SELECT * FROM recipes');
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/api/recipes/:id', async (req: Request, res: Response) => {
  const id = req.params.id as RecipeRequestParams;

  if (id) {
    const whereIdSql = `WHERE recipe_id = '${id}'`;
    try {
      const [recipe] = await pool.query(`SELECT * FROM recipes WHERE id = '${id}'`);
      const [steps] = await pool.query(
        `SELECT image_url,title,text,image_position FROM steps ${whereIdSql}`
      );
      const [ingredients] = await pool.query(
        `SELECT amount,unit,name FROM ingredients ${whereIdSql}`
      );
      res.json({ recipe, steps, ingredients });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});