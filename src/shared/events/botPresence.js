import { Event } from '../../shared/structures.js'
import { getSource } from '../../shared/util.js'
import { readFile } from 'node:fs/promises'
import { MessageEmbed } from 'discord.js'
const { evtData } = JSON.parse(await readFile('../shared/config.json'))
const { thisFile } = getSource(import.meta.url)

export const event = new Event('presenceUpdate', async (client, oldPresence, presence) => {
  if (presence.guild.id !== client.guild.id) return
  if (isOnline(presence) === isOnline(oldPresence)) return
  const logUsers = evtData[thisFile][client.source]
  if (!logUsers.some((id) => client.resolveId(id, 'user') === presence.userId)) return
  const embed = new MessageEmbed()
  .setTitle(`${presence.user.username} ${isOnline(presence) ? "online!" : "offline."}`)
  .setColor(client.source === 'jphelp' ? client.getColor(presence.userId) : 'RED')
  .setAuthor(presence.user.tag, presence.user.displayAvatarURL())
  .setTimestamp()
  if (client.source === 'jphelp') {
    if (isOnline(presence)) {
      if (!client.state.offline.includes(presence.userId)) return
      client.state.offline = client.state.offline.filter((id) => id !== presence.userId)
      client.channel.send({ embeds: [embed] })
    } else {
      setTimeout(async () => {
        if (await presence.member.fetch().then((m) => isOnline(m.presence))) return
        client.channel.send({ embeds: [embed] })
        client.state.offline.push(presence.userId)
      }, 300000)
    }
  } else if (client.source === 'omega') {
    if (isOnline(presence)) return
    if (presence.user.partial) await presence.user.fetch()
    client.channel.send({ embeds: [embed] })
  }
})

function isOnline(presence) {
  return (presence?.status ?? 'offline') !== 'offline'
}
