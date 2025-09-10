function minimumTeachings(n: number, languages: number[][], friendships: number[][]): number {
    function setMapValues(map: Map<number, number>, friend: number) {
        for(let j = 0; j < languages[friend - 1].length; j++) {
            let key = languages[friend - 1][j];
            let val = map.get(key);
            if(val === undefined) {
                map.set(key, 1);
            }
            else {
                map.set(key, val + 1);
            }
        }
    }
    function getMapMaxKeyVal(map: Map<number, number>): [number, number] {
        let maxVal = 0, maxValKey = 0;
        for(let [key, val] of map) {
            if(val > maxVal) {
                maxVal = val;
                maxValKey = key;
            }
        }
        return [maxValKey, maxVal];
    }
    let friendshipsThatCantCommunicate: number[][] = [];
    let friendsThatCantCommunicate: Set<number> = new Set();
    for(let i = 0; i < friendships.length; i++) {
        let friend1: number = friendships[i][0], friend2: number = friendships[i][1];
        let canCommunicate: boolean = false;
        for(let j = 0; j < languages[friend1 - 1].length; j++) {
            if(languages[friend2 - 1].includes(languages[friend1 - 1][j])) {
                canCommunicate = true;
                break;
            }
        }
        if(!canCommunicate) {
            friendshipsThatCantCommunicate.push([friend1, friend2])
            friendsThatCantCommunicate.add(friend1);
            friendsThatCantCommunicate.add(friend2);
        }
    }
    console.log(friendshipsThatCantCommunicate);
    let map = new Map();
    let set = new Set();
    let maxVal = 0;
    let maxValKey = 0;
    for(let i = 0; i < friendshipsThatCantCommunicate.length; i++) {
        let friend1: number = friendshipsThatCantCommunicate[i][0], friend2: number = friendshipsThatCantCommunicate[i][1];
        if(!set.has(friend1)) {
            setMapValues(map, friend1);
        }
        if(!set.has(friend2)) {
            setMapValues(map, friend2);
        }
        set.add(friend1);
        set.add(friend2);
    }
    [maxValKey, maxVal] = getMapMaxKeyVal(map);
    console.log(map, maxValKey, maxVal);
    let res = 0;
    for(let i = 0; i < languages.length; i++) {
        if(friendsThatCantCommunicate.has(i + 1) && !languages[i].includes(maxValKey)) {
            res++;
        }
    }
    return res;
};
let n1 = 2;
let languages1 = [[1],[2],[1,2]];
let friendships1 = [[1,2],[1,3],[2,3]];
console.log(minimumTeachings(n1, languages1, friendships1));
let n2 = 3;
let languages2 = [[2],[1,3],[1,2],[3]];
let friendships2 = [[1,4],[1,2],[3,4], [2,3]];
console.log(minimumTeachings(n2, languages2, friendships2));
let n3 = 17;
let languages3 = [[4,7,2,14,6],[15,13,6,3,2,7,10,8,12,4,9],[16],[10],[10,3],[4,12,8,1,16,5,15,17,13],[4,13,15,8,17,3,6,14,5,10],[11,4,13,8,3,14,5,7,15,6,9,17,2,16,12],[4,14,6],[16,17,9,3,11,14,10,12,1,8,13,4,5,6],[14],[7,14],[17,15,10,3,2,12,16,14,1,7,9,6,4]];
let friendships3 = [[4,11],[3,5],[7,10],[10,12],[5,7],[4,5],[3,8],[1,5],[1,6],[7,8],[4,12],[2,4],[8,9],[3,10],[4,7],[5,12],[4,9],[1,4],[2,8],[1,2],[3,4],[5,10],[2,7],[1,7],[1,8],[8,10],[1,9],[1,10],[6,7],[3,7],[8,12],[7,9],[9,11],[2,5],[2,3]];
console.log(minimumTeachings(n3, languages3, friendships3));