import { Event } from '../../shared/structures.js'

export const event = new Event('messageCreate', async (client, msg) => {
  if (msg.author.bot) return
  if (msg.content !== `${client.source} end`) return
  if (!msg.member.permissions.has('MANAGE_GUILD')) return
  await msg.react('\u2705')
  console.log(`${client.source.toUpperCase()} exited by ${msg.author.tag} (${msg.author.id})`)
  process.exit()
})