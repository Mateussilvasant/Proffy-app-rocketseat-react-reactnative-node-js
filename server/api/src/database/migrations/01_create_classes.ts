import Knex from 'knex';

export async function up(knex : Knex){
    return await knex.schema.createTable('classes', (table) =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('coast').notNullable();

        table.integer("user_id",11).unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
}

export async function down(knex : Knex){
   return knex.schema.dropTable('classes');
}