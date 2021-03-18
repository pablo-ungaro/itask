const knex = require('../database/connection');

module.exports = {
    async create(req, res) {
        const { task, student_id } = req.body;

        await knex('tasks').insert({
            task,
            student_id,
            done: false
        });

        return res.json({ success: true })
    },
    async update(req, res) {
        const { id, task, done } = req.body;

        if (!task) {
            const updateId = await knex('tasks').where('id', id).update({
                done
            })
        } else {
            const updateId = await knex('tasks').where('id', id).update({
                task,
                done
            })
        }

        return res.json({ success: true })
    },
    async delete(req, res) {
        const {id} = req.body

        await knex('tasks').where('id', id).del()

        return res.json({success: true})
    }
}