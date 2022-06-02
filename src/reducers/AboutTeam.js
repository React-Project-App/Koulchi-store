import { GET_TEAM } from '../actionconstants/ActionCn';

export default function AboutTeam(state=[],{type,payload}) {
  switch (type) {
      case GET_TEAM:
          const Members=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
        return  Members;
  
      default:
        return  state;
  }
}
