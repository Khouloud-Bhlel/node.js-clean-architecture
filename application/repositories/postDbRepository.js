export default function postRepository(repository) {
  const findAll = (params) => repository.findAll(params);
  const findById = (id) => repository.findById(id);
  const add = (post) => repository.add(post);
  const updateById = (id, post) => repository.updateById(id, post);
  const deleteById = (id) => repository.deleteById(id);

  return {
    findAll,
    findById,
    add,
    updateById,
    deleteById
  };
}
