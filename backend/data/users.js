import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Fabian Pena',
        email: 'fabian@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Yesi Jara',
        email: 'yesi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users