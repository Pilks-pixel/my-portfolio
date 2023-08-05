
function matchSection(ref, targetId) {
    const firstWordPattern = new RegExp(targetId.split("_")[0]);
    
    const sectionNode = ref.current.filter(node => {
        return firstWordPattern.test(node.id);
    });
    return sectionNode[0];
}

// easter egg in devtools
const asciiArt = `
	 /$$   /$$           /$$ /$$                 /$$      /$$                     /$$       /$$ /$$
	| $$  | $$          | $$| $$                | $$  /$ | $$                    | $$      | $$| $$
	| $$  | $$  /$$$$$$ | $$| $$  /$$$$$$       | $$ /$$$| $$  /$$$$$$   /$$$$$$ | $$  /$$$$$$$| $$
	| $$$$$$$$ /$$__  $$| $$| $$ /$$__  $$      | $$/$$ $$ $$ /$$__  $$ /$$__  $$| $$ /$$__  $$| $$
	| $$__  $$| $$$$$$$$| $$| $$| $$  \  $$      | $$$$_  $$$$| $$  \ $$| $$    \__/| $$| $$  | $$|__/
	| $$  | $$| $$_____/| $$| $$| $$  | $$      | $$$/ \  $$$| $$  | $$| $$       | $$| $$  | $$    
	| $$  | $$|  $$$$$$$| $$| $$|  $$$$$$/      | $$/   \  $$|  $$$$$$/| $$       | $$|  $$$$$$$ /$$
	|__/  |__/ \_______/|__/|__/ \______/         |__/     \__/ \______/ |__/       |__/ \_______/|__/
																 
	
MADE BY PETE PILKINGTON 2023
`;

export { matchSection, asciiArt }