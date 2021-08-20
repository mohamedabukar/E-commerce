const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    }
  })
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk({
      where: {
        id: req.params.id
      },
      include: {
        model: Product,
        attributes: ['product_name', 'price', 'stock', 'category_id']
      }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this id' })
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
}
);

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      tag_name: req.body.tag_name
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(tagData);
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try{
  const tagData = await Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(tagData);
} catch(err){
  res.status(500).json(err);
}
    
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
  const tagData = await Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(tagData);
} catch (err){
  res.status(500).json()
}
});

module.exports = router;
