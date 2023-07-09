import experience from './schemas/experience'
import project from './schemas/project'
import skill from './schemas/skill'
import pageInfo from './schemas/pageInfo'
import social from './schemas/social'
import experience from './schemas/experience'
import project from './schemas/project'

export default createSchema({
  name:"default",
  type : schemaTypes.concat([skill,pageInfo,experience,social,project,]),

})
