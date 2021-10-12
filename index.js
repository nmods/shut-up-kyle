module.exports = function shutupkyle(mod) {
	mod.hook('S_QUEST_BALLOON',1,event =>{
		let test = event.message.match(/monsterBehavior:(\d*)/)
		if(test && [2070201,2070202,2070203,2070301,2070302,2070303].includes(Number(test[1]))) return false
	})
}
