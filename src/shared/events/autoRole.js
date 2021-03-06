import { Event } from '../../shared/structures.js'
import { getSource, genLogs } from '../../shared/util.js'
import { readFile } from 'node:fs/promises'
const { config } = JSON.parse(await readFile('shared/data.json'))
const { thisFile } = getSource(import.meta.url)

export default new Event('guildMemberAdd', (client, member) => {
  if (member.guild.id !== client.guild.id) return
  const [memberRole, botRole, channelId] = config[thisFile][client.source]
  const role = client.getRole(!member.user.bot ? memberRole : botRole)
  if (role) {
    member.roles.add(role).then(() => {
      if (channelId)
        genLogs(client, channelId, {
          action: "Give Role",
          user: `@${member.user.tag} (${member.id})`,
          role: `@${role.name} (${role.id})`,
          reason: "AutoRole"
        }, [{ name: "Give Role", match: [member.id, role.name, "given"] }])
    }).catch(() => null)
  }
})
