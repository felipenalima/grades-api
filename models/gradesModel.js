export default (mongoose) => {
  const gradesSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
      validate(value) {
        if (value < 0) {
          throw new Error('Valor informado não pode ser menor que 0');
        }
      },
      min: 0,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  const gradesModel = mongoose.model('grade', gradesSchema, 'grade');

  return gradesModel;
};
