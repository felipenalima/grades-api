import express from 'express';
import controller from '../controllers/gradeController.js';

const app = express();

app.post('/grades', controller.create);
app.get('/grades', controller.findAll);
app.get('/grades/:id', controller.findOne);
app.put('/grades/:id', controller.update);
app.delete('/grades/:id', controller.remove);
app.delete('/grades', controller.removeAll);

export { app as gradeRouter };
