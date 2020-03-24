import User from '../../../src/entities/user';

export default function AddUser(
  username,
  password,
  email,
  role,
  createdAt,
  userRepository
) {
  // TODO: add a proper validation (consider using @hapi/joi)
  if (!username || !password || !email) {
    throw new Error('username, password and email fields cannot be empty');
  }

  const user = User(
    username,
    password,
    email,
    role,
    createdAt
  );

  return userRepository
    .findByProperty({ username: username })
      .then((userWithUsername) => {
        if (userWithUsername.length) throw new Error(`User with username: ${username} already exists`);
        return userRepository.findByProperty({ email: email })
      })
      .then((userWithEmail) => {
        if (userWithEmail.length) throw new Error(`User with email: ${email} already exists`);
        return userRepository.add(user);
      })
}
