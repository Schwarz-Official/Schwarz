export const generateGradient = (email) => {
    if (!email) {
        return null;
    }

    const gradients = [
        "linear-gradient(135deg, #0061ff, #5596ff)",
        "linear-gradient(135deg, #696eff, #9194ff)",
        "linear-gradient(135deg, #ff5858, #ffc8c8)",
        "linear-gradient(135deg, #30c67c, #82f4b1)",
        "linear-gradient(135deg, #d3321d, #ffcf67)"
    ];

    // Create a hash from the email
    const hash = email.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);

    // Use the hash to get an index for the gradients array
    const index = hash % gradients.length;

    return gradients[index];
}
