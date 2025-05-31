import { Post } from "../objects/post.js";

const postList = document.getElementById("posts");

getPosts();

function getPosts() {
    const posts = [
        new Post(crypto.randomUUID(), "Franko", "2025-05-29 13:06", "Napalm Dreams", "Smells like victory. The air shimmered with heat as the smoke curled skyward. Nothing was left but scorched earth.", [crypto.randomUUID(), crypto.randomUUID()], ["Wild."]),
        new Post(crypto.randomUUID(), "Jill", "2025-05-28 09:12", "Ashes Rise", "We watched it all burn. The flames danced like spirits of vengeance. Silence followed, heavier than ash.", [crypto.randomUUID()], ["Chilling."]),
        new Post(crypto.randomUUID(), "Dom", "2025-05-27 16:45", "Fallout Diaries", "No more sunlight. Just a gray haze blanketing everything. Even time seemed to stand still.", [crypto.randomUUID(), crypto.randomUUID(), crypto.randomUUID()], ["Dark times."]),
        new Post(crypto.randomUUID(), "Kara", "2025-05-26 08:30", "Steel Rain", "It never stopped falling. Metallic thunder echoed across the wasteland. Each drop carved a scar into the ground.", [], ["Metal."]),
        new Post(crypto.randomUUID(), "Nate", "2025-05-25 19:00", "Dust and Echoes", "Only shadows remain. Footprints fade, voices vanish. The past whispers but never returns.", [crypto.randomUUID()], ["Nice line."]),
        new Post(crypto.randomUUID(), "Ivy", "2025-05-24 21:50", "Broken Ground", "The earth cracked open. It swallowed hopes and histories whole. We stood there, unable to move.", [crypto.randomUUID(), crypto.randomUUID()], ["Epic."]),
        new Post(crypto.randomUUID(), "Leo", "2025-05-23 14:22", "Last March", "We walked without end. Boots dragging through mud and memory. Nobody asked where we were going.", [], ["Oof."]),
        new Post(crypto.randomUUID(), "Mira", "2025-05-22 11:10", "Crater Life", "Living under rubble. Each breath is a battle against dust and despair. But we're still breathing.", [crypto.randomUUID()], ["Brutal."]),
        new Post(crypto.randomUUID(), "Zed", "2025-05-21 18:37", "Rad-Zone Blues", "Too much glow. Our skin sings at night from the radiation. Even the shadows feel radioactive.", [crypto.randomUUID(), crypto.randomUUID()], ["Haha."]),
        new Post(crypto.randomUUID(), "Luna", "2025-05-20 07:07", "Skyfall", "It came from above. A roar louder than thunder, a flash brighter than day. Then came the silence.", [], ["No way!"]),
        new Post(crypto.randomUUID(), "Ash", "2025-05-19 22:40", "No Shelter", "They closed every door. Now we live between the walls, listening. Hope is a memory that fades each night.", [crypto.randomUUID()], ["Sad."]),
        new Post(crypto.randomUUID(), "Toby", "2025-05-18 15:15", "Echo Chamber", "Only my voice replies. It echoes back with a delay that feels like mockery. I talk just to hear myself exist.", [crypto.randomUUID(), crypto.randomUUID()], ["Creepy."])
    ];
    for (let post of posts) {
        postList.append(post.publishPostCard());
    }
}