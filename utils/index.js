
function matchSection(ref, targetId) {
    const firstWordPattern = new RegExp(targetId.split("_")[0]);
    
    const sectionNode = ref.current.filter(node => {
        return firstWordPattern.test(node.id);
    });
    return sectionNode[0];
}

export { matchSection }