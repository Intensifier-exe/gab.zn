const config = {
    brandColors: {
        primary: '#FF1493',
        secondary: '#FF85B2',
        blurple: '#FF1493',
        fuchsia: '#FF69B4',
        economy: '#FFB6C1',
        birthday: '#FF1493',
        moderation: '#FF69B4',
        ticketOpen: '#FF69B4',
        ticketClaimed: '#FFB6C1',
        giveawayActive: '#FF69B4',
    },
    statusColors: {
        success: 'green',          // Preserving essential status colors
        error: 'red',            
        warning: 'yellow',       
        info: 'blue',           
    },
    priorityColors: {
        none: '#FFB6C1',
        low: '#FFB6C1',
        medium: '#FF69B4',
        high: '#FF1493',
        urgent: '#C71585',
    },
    applicationStatus: {
        pending: '#FF69B4',
        approved: '#FFB6C1',
    }
};

module.exports = config;