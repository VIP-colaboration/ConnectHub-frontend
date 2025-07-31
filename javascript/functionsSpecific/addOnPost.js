import { Post } from "../objects/post.js";
import { getToken } from "../objects/token.js";
import { formatDate } from "./formatDate.js";




export async function getPostCardsFromUser() {
    const postList = document.getElementById("posts");
    try {
        const response = await fetch("http://localhost:8080/get-posts-from-user", {
            method: "GET",
            headers: {
                "Authorization" : getToken(),
            }
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message)
        }

        const postResponses = await response.json();

        const posts = [];

        for (let postResponse of postResponses) {
            const post = new Post(
                postResponse.id,
                postResponse.userId,
                postResponse.date,
                postResponse.title,
                postResponse.content,
                postResponse.private,
                postResponse.likes,
                postResponse.comments,
            );

            posts.push(post);
        }
        
        for (let post of posts) {
            postList.append(post.publishPostCard());
        }

        const observer = new IntersectionObserver((postCards) =>  {
        postCards.forEach((postCard) => {
            if (postCard.isIntersecting) {
                postCard.target.classList.add("showPostCard");
            }
        })
    });

    const hiddenPostCards = document.querySelectorAll(".hiddenPostCard");
    hiddenPostCards.forEach((postCard) => observer.observe(postCard));

    } catch (error) {
        console.error(error.message);
    }
}


/* const posts = [
        new Post(crypto.randomUUID(), "Franko", "2025-05-29 13:06", "Napalm Dreams", "Smells like victory. The air shimmered with heat as the smoke curled skyward. Nothing was left but scorched earth.", false, [crypto.randomUUID(), crypto.randomUUID()], ["Wild."]),
        new Post(crypto.randomUUID(), "Jill", "2025-05-28 09:12", "Ashes Rise", "We watched it all burn. The flames danced like spirits of vengeance. Silence followed, heavier than ash.", false, [crypto.randomUUID()], ["Chilling."]),
        new Post(crypto.randomUUID(), "Dom", "2025-05-27 16:45", "Fallout Diaries", "No more sunlight. Just a gray haze blanketing everything. Even time seemed to stand still.", false, [crypto.randomUUID(), crypto.randomUUID(), crypto.randomUUID()], ["Dark times."]),
        new Post(crypto.randomUUID(), "Kara", "2025-05-26 08:30", "Steel Rain", "It never stopped falling. Metallic thunder echoed across the wasteland. Each drop carved a scar into the ground.", false, [], ["Metal."]),
        new Post(crypto.randomUUID(), "Nate", "2025-05-25 19:00", "Dust and Echoes", "Only shadows remain. Footprints fade, voices vanish. The past whispers but never returns.", false, [crypto.randomUUID()], ["Nice line."]),
        new Post(crypto.randomUUID(), "Ivy", "2025-05-24 21:50", "Broken Ground", "The earth cracked open. It swallowed hopes and histories whole. We stood there, unable to move.", false, [crypto.randomUUID(), crypto.randomUUID()], ["Epic."]),
        new Post(crypto.randomUUID(), "Leo", "2025-05-23 14:22", "Last March", "We walked without end. Boots dragging through mud and memory. Nobody asked where we were going.", false, [], ["Oof."]),
        new Post(crypto.randomUUID(), "Mira", "2025-05-22 11:10", "Crater Life", "Living under rubble. Each breath is a battle against dust and despair. But we're still breathing.", false, [crypto.randomUUID()], ["Brutal."]),
        new Post(crypto.randomUUID(), "Zed", "2025-05-21 18:37", "Rad-Zone Blues", "Too much glow. Our skin sings at night from the radiation. Even the shadows feel radioactive.", false, [crypto.randomUUID(), crypto.randomUUID()], ["Haha."]),
        new Post(crypto.randomUUID(), "Luna", "2025-05-20 07:07", "Skyfall", "It came from above. A roar louder than thunder, a flash brighter than day. Then came the silence.", false, [], ["No way!"]),
        new Post(crypto.randomUUID(), "Ash", "2025-05-19 22:40", "No Shelter", "They closed every door. Now we live between the walls, listening. Hope is a memory that fades each night.", false, [crypto.randomUUID()], ["Sad."]),
        new Post(crypto.randomUUID(), "Toby", "2025-05-18 15:15", "Echo Chamber", "Only my voice replies. It echoes back with a delay that feels like mockery. I talk just to hear myself exist.", false, [crypto.randomUUID(), crypto.randomUUID()], ["Creepy."])
    ]; */