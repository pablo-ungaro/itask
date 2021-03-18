const knex = require('../database/connection');

module.exports = {
    async index(req, res) {
        const students = await knex('students').select('*');
        const tasks = await knex('tasks').select('*')


        const serializedStudents = students.map(student => {
            const task = tasks.filter(task => {
                if (task.student_id === student.id) {
                    return true
                }
            })

            return {
                id: student.id,
                name: student.name,
                tasks: task
            }
        })

        return res.json(serializedStudents);
    },
    async show(req, res) {
        const {id} = req.params

        let student = await knex('students').select('*').where('id', id).first();

        if(!student) {
            return res.status(400).json({message: "Student not found."});
        };

        const tasks = await knex('tasks').select('*').where('student_id', id);

        student = {
            ...student,
            tasks
        } 

        return res.json(student);
    },
    async create(req, res) {
        const { name } = req.body;

        const insertId = await knex('students').insert({
            name
        });

        const id = insertId[0]

        return res.json({
            id,
            name
        });
    },
    async update(req, res) {
        const { id, name } = req.body;

        await knex('students').where('id', id).update({
            name
        });

        return res.json({
            id,
            name
        })
    },
    async delete(req, res) {
        const {id} = req.body

        await knex('students').where('id', id).del()
        await knex('tasks').where('student_id', id).del()

        return res.json({success: true})
    }


}