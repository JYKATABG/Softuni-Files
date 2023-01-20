class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers) {
        for (let element of footballPlayers) {
            let [player, age, playerValue] = element.split("/");

            let findPlayer = this.invitedPlayers.find(x => x.player === player);

            if (findPlayer) {
                if (findPlayer.playerValue < playerValue) {
                    findPlayer.playerValue += playerValue;
                }
            } else {
                this.invitedPlayers.push({
                    name: player,
                    age: Number(age),
                    playerValue: Number(playerValue)
                });
            }
        }
        let result = this.invitedPlayers.map(x => x.name);
        return `You successfully invite ${result.join(", ")}.`
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/");

        playerOffer = Number(playerOffer)

        let findPlayer = this.invitedPlayers.find(x => x.name === name)
        if (!findPlayer) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (findPlayer.playerValue > playerOffer) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${findPlayer.playerValue - playerOffer} million more are needed to sign the contract!`)
        } else {
            findPlayer.playerValue = "Bought"
        }
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {

        let player = this.invitedPlayers.find(x => x.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        if (player.age < age) {
            if ((age - 5) < player.age) {
                return `${name} will sign a contract for ${age - player.age} years with ${this.clubName} in ${this.country}!`
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }

        return `${name} is above age limit!`
    }

    transferWindowResult() {
        let result = ["Players list:"]
        this.invitedPlayers.map(x => result.push(`Player ${x.name}-${x.playerValue}`))
        return result.join("\n")
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/70", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));





