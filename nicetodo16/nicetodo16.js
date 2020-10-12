const oldData = {
    firedRice: {
        Price: 30,
        vnName: 'Com rang dua bo',
    },
    noddle: {
        price: 20,
        vnName: 'My tom chanh',
    },
    pho: {
        price: 35,
        vnName: 'Pho bo tai chin'
    },
    };
console.log(oldData);

// If noddle removal is needed, a new object named newData is created containing data from oldData object, without noddle property.

const newData = {
    firedRice: {
        Price: 30,
        vnName: 'Com rang dua bo',
    },
    
    pho: {
        price: 35,
        vnName: 'Pho bo tai chin'
    },
    };
console.log(newData);
