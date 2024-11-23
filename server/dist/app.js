"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Enable CORS
// TODO: add validation using something like zod or joi
// TODO: document API endpoints w/ swagger or openapi
app.get('/api/recipes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [recipes] = yield db_1.default.query('SELECT * FROM recipes');
        res.json(recipes);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}));
app.get('/api/recipes/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (id) {
        const whereIdSql = `WHERE recipe_id = '${id}'`;
        try {
            const [recipe] = yield db_1.default.query(`SELECT * FROM recipes WHERE id = '${id}'`);
            const [steps] = yield db_1.default.query(`SELECT image_url,title,text,image_position FROM steps ${whereIdSql}`);
            const [ingredients] = yield db_1.default.query(`SELECT amount,unit,name FROM ingredients ${whereIdSql}`);
            res.json({ recipe, steps, ingredients });
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
}));
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
