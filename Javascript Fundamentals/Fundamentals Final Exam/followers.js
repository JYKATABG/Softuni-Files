function followers(input) {

    let records = new Map();
    let count = 0;

    for (let line of input) {
        let [command, ...tokens] = line.split(': ');
        let username = tokens[0]
        switch (command) {
            case "New follower":

                if (!records.has(username)) {
                    records.set(username, [])
                    records.get(username).push(Number(0))
                    records.get(username).push(Number(0))
                    count += 1;
                } else {
                    break;
                }
                break;

            case "Like":
                let likes = Number(tokens[1])
                if (!records.has(username)) {
                    records.set(username, [])
                    records.get(username).push(likes)
                    records.get(username).push(Number(0))
                    count += 1
                } else {
                    records.get(username)[0] += likes
                }
                break;

            case "Comment":
                if (!records.has(username)) {
                    records.set(username, [])
                    records.get(username).push(Number(0))
                    records.get(username).push(Number(1))
                    count += 1
                } else {
                    records.get(username)[1] += 1
                }
                break;

            case "Blocked":
                if (records.has(username)) {
                    records.delete(username);
                    count -= 1
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
    }
    console.log(`${count} followers`);

    for (let [user, userInfo] of records) {
        console.log(`${user}: ${userInfo[0] + userInfo[1]}`);
    }
}
followers(["Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"])
