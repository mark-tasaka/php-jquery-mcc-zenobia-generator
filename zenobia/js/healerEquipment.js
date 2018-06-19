
function getEquipment(){
	let equipment = [
        
        {"gear": "Backpack, healer’s kit (healing herbs and dried plants), waterskin, flint fire starter, torches (x5), dried berries (3 days ration), small pouch filled with shinny stones, bone knife"},
        {"gear": "Backpack, healer’s kit (healing herbs and dried plants), waterskin, flint fire starter, hemp rope (50 feet), dried meat (5 days ration), small jar of honey, fish bone needles and thread"},
        {"gear": "Backpack, healer’s kit (healing herbs and dried plants), waterskin, flint fire starter, dried berries (5 days ration), fish bone needles and thread, small pouch filled with flower seeds"},
        {"gear": "Large sack, healer’s kit (healing herbs and dried plants), waterskin, flint fire starter, dried meat (5 days ration), torch (x3), stone cutting tool"},
        {"gear": "Large sack, healer’s kit (healing herbs and dried plants), waterskin, flint fire starter, hemp rope (50 feet), preserved fish (3 days ration), small pouch filled with flower seeds"}
        
		];
	
		return equipment[Math.floor(Math.random() * equipment.length)]; 
		
}