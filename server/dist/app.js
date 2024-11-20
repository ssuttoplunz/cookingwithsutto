"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_json_1 = __importDefault(require("./data.json"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const getItemsDataById = (id) => {
    return data_json_1.default.filter((item) => item.id === id)[0];
};
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Enable CORS
// TODO: add validation using something like zod or joi
// TODO: document API endpoints w/ swagger or openapi
app.get('/api/recipes', (req, res) => {
    const queryParams = req.query;
    const id = queryParams === null || queryParams === void 0 ? void 0 : queryParams.id;
    if (id) {
        res.json(getItemsDataById(id));
    }
    else {
        res.json(data_json_1.default);
    }
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
