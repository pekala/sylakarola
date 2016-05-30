var galleries = {};
window.galleries = galleries;

window.setGallery = function(photos, container) {
    var nodes = [];
    photos.forEach(function (photo) {
        var figure = document.createElement('figure');
        figure.classList.add('grid--element', 'grid--element__gallery')
        figure.innerHTML =
            '<a href="' + photo.src + '" data-size="' + photo.width + 'x' + photo.height + '">' +
            '<img class="grid--thumbnail" src="' + photo.thumb + '" alt="' + photo.desc + '" />' +
            '</a>' +
            '<figcaption><strong>' + photo.caption + '</strong> ' + photo.desc + '</figcaption>';
        nodes.push(figure);
    });
    nodes.forEach(function(node) {
        container.appendChild(node);
    })
};

galleries.photos = [{
    'src': 'images/photos/1.jpg',
    'thumb': 'images/photos/1_thumb.jpg',
    'caption': 'Portrait',
    'desc': 'Digital camera, Photoshop',
    'width': 599,
    'height': 900
}, {
    'src': 'images/photos/2.jpg',
    'thumb': 'images/photos/2_thumb.jpg',
    'caption': 'Portrait in motion',
    'desc': 'Digital camera, Photoshop',
    'width': 1359,
    'height': 900
}, {
    'src': 'images/photos/3.jpg',
    'thumb': 'images/photos/3_thumb.jpg',
    'caption': 'Portrait',
    'desc': 'Digital camera, Photoshop',
    'width': 599,
    'height': 900
}, {
    'src': 'images/photos/5.jpg',
    'thumb': 'images/photos/5_thumb.jpg',
    'caption': 'Portrait',
    'desc': 'Digital camera, Photoshop',
    'width': 1352,
    'height': 900
}, {
    'src': 'images/photos/8.jpg',
    'thumb': 'images/photos/8_thumb.jpg',
    'caption': 'In motion',
    'desc': 'Digital camera, Photoshop',
    'width': 1226,
    'height': 900
}, {
    'src': 'images/photos/9.jpg',
    'thumb': 'images/photos/9_thumb.jpg',
    'caption': 'Misc',
    'desc': 'Digital camera, Photoshop',
    'width': 573,
    'height': 900
}, {
    'src': 'images/photos/10.jpg',
    'thumb': 'images/photos/10_thumb.jpg',
    'caption': 'Portrait',
    'desc': 'Digital camera, Photoshop',
    'width': 599,
    'height': 900
}, {
    'src': 'images/photos/12.jpg',
    'thumb': 'images/photos/12_thumb.jpg',
    'caption': 'Portrait in the grass',
    'desc': 'Digital camera, Photoshop',
    'width': 1353,
    'height': 900
}, {
    'src': 'images/photos/13.jpg',
    'thumb': 'images/photos/13_thumb.jpg',
    'caption': 'Nude prologue',
    'desc': 'Digital camera, Photoshop',
    'width': 609,
    'height': 900
}, {
    'src': 'images/photos/14.jpg',
    'thumb': 'images/photos/14_thumb.jpg',
    'caption': 'Portrait',
    'desc': 'Digital camera, analogue lens, Photoshop',
    'width': 1352,
    'height': 900
}, {
    'src': 'images/photos/15.jpg',
    'thumb': 'images/photos/15_thumb.jpg',
    'caption': 'Conceptual ',
    'desc': 'Digital camera, Photoshop',
    'width': 1327,
    'height': 900
}, {
    'src': 'images/photos/16.jpg',
    'thumb': 'images/photos/16_thumb.jpg',
    'caption': 'Misc',
    'desc': 'Digital camera, Photoshop',
    'width': 1352,
    'height': 900
}];


galleries.drawings = [{
    src: 'images/drawings/1.jpg',
    thumb: 'images/drawings/1_thumb.jpg',
    caption: 'Watercolours',
    height: 900,
    width: 1264,
    desc: 'Africa - inspired watercolour picture'
}, {
    src: 'images/drawings/2.jpg',
    thumb: 'images/drawings/2_thumb.jpg',
    caption: 'Sketching ',
    height: 900,
    width: 1264,
    desc: 'Corn sketch in fineliner'
}, {
    src: 'images/drawings/3.jpg',
    thumb: 'images/drawings/3_thumb.jpg',
    caption: 'Sketching',
    height: 900,
    width: 1264,
    desc: 'Shoes sketch'
}, {
    src: 'images/drawings/4.jpg',
    thumb: 'images/drawings/4_thumb.jpg',
    caption: 'Drawings',
    height: 900,
    width: 1273,
    desc: 'Fashion drawing'
}, {
    'src': 'images/drawings/drawing1.jpg',
    'thumb': 'images/drawings/drawing1_thumb.jpg',
    'caption': 'Fashion drawing',
    'desc': 'Sustainable fashion project',
    'width': 900,
    'height': 1238
}, {
    'src': 'images/drawings/drawing2.jpg',
    'thumb': 'images/drawings/drawing2_thumb.jpg',
    'caption': 'Fashion drawing',
    'desc': 'Sustainable fashion project',
    'width': 4109,
    'height': 2480
}, {
    'src': 'images/drawings/bra1.jpg',
    'thumb': 'images/drawings/bra1_thumb.jpg',
    'caption': 'Technical drawing',
    'desc': 'Female collection',
    'width': 800,
    'height': 1200
}, {
    'src': 'images/drawings/bra3.jpg',
    'thumb': 'images/drawings/bra3_thumb.jpg',
    'caption': 'Technical drawing',
    'desc': 'Female collection',
    'width': 800,
    'height': 1200
}, {
    'src': 'images/drawings/coat.jpg',
    'thumb': 'images/drawings/coat_thumb.jpg',
    'caption': 'Technical drawing',
    'desc': 'Female collection',
    'width': 800,
    'height': 1200
}, {
    'src': 'images/drawings/jacket.jpg',
    'thumb': 'images/drawings/jacket_thumb.jpg',
    'caption': 'Technical drawing',
    'desc': 'Kids collection',
    'width': 800,
    'height': 1200
}];

galleries.moodboards = [{
    src: 'images/moodboards/1.jpg',
    thumb: 'images/moodboards/1_thumb.jpg',
    caption: 'Mood board',
    height: 900,
    width: 636,
    desc: 'School projet'
}, {
    src: 'images/moodboards/2.jpg',
    thumb: 'images/moodboards/2_thumb.jpg',
    caption: 'Mood board',
    height: 900,
    width: 1273,
    desc: 'School project'
}, {
    src: 'images/moodboards/3.jpg',
    thumb: 'images/moodboards/3_thumb.jpg',
    caption: 'Persona',
    height: 900,
    width: 1273,
    desc: 'School project'
}, {
    src: 'images/moodboards/4.jpg',
    thumb: 'images/moodboards/4_thumb.jpg',
    caption: 'Persona',
    height: 900,
    width: 1273,
    desc: 'School project'
}, {
    'src': 'images/moodboards/greenmood.jpg',
    'thumb': 'images/moodboards/greenmood_thumb.jpg',
    'caption': 'School project',
    'desc': 'Sustainable signature',
    'width': 1754,
    'height': 1240
}, {
    'src': 'images/moodboards/shapemood.jpg',
    'thumb': 'images/moodboards/shapemood_thumb.jpg',
    'caption': 'Internship examination',
    'desc': 'Structure print',
    'width': 1190,
    'height': 1649
}, {
    src: 'images/newsletters/1.jpg',
    thumb: 'images/newsletters/1_thumb.jpg',
    caption: '',
    desc: '',
    width: 984,
    height: 3400,
}, {
    src: 'images/newsletters/2.jpg',
    thumb: 'images/newsletters/2_thumb.jpg',
    caption: '',
    desc: '',
    width: 800,
    height: 1150,
}, {
    src: 'images/newsletters/3.jpg',
    thumb: 'images/newsletters/3_thumb.jpg',
    caption: '',
    desc: '',
    width: 799,
    height: 926,
}, {
    src: 'images/newsletters/4.jpg',
    thumb: 'images/newsletters/4_thumb.jpg',
    caption: '',
    desc: '',
    width: 799,
    height: 980,
}, {
    src: 'images/newsletters/5.jpg',
    thumb: 'images/newsletters/5_thumb.jpg',
    caption: '',
    desc: '',
    width: 940,
    height: 1250,
}, {
    src: 'images/newsletters/6.jpg',
    thumb: 'images/newsletters/6_thumb.jpg',
    caption: '',
    desc: '',
    width: 1000,
    height: 1400,
}, {
    src: 'images/newsletters/7.jpg',
    thumb: 'images/newsletters/7_thumb.jpg',
    caption: '',
    desc: '',
    width: 984,
    height: 2400,
}, {
    src: 'images/newsletters/8.jpg',
    thumb: 'images/newsletters/8_thumb.jpg',
    caption: '',
    desc: '',
    width: 806,
    height: 1250,
}, {
    src: 'images/newsletters/9.jpg',
    thumb: 'images/newsletters/9_thumb.jpg',
    caption: '',
    desc: '',
    width: 800,
    height: 700,
}, {
    src: 'images/newsletters/10.jpg',
    thumb: 'images/newsletters/10_thumb.jpg',
    caption: '',
    desc: '',
    width: 1600,
    height: 928,
}, {
    src: 'images/newsletters/11.jpg',
    thumb: 'images/newsletters/11_thumb.jpg',
    caption: '',
    desc: '',
    width: 900,
    height: 1300,
}, {
    src: 'images/newsletters/12.jpg',
    thumb: 'images/newsletters/12_thumb.jpg',
    caption: '',
    desc: '',
    width: 984,
    height: 1500,
}, {
    src: 'images/newsletters/13.jpg',
    thumb: 'images/newsletters/13_thumb.jpg',
    caption: '',
    desc: '',
    width: 900,
    height: 1300,
}];

galleries.projects = [{
    src: 'images/projects/exam.jpg',
    thumb: 'images/projects/exam_thumb.jpg',
    caption: '2nd Wear',
    desc: 'Garment sewn from second hand clothing',
    width: 1000,
    height: 1376
}, {
    src: 'images/projects/weave.jpg',
    thumb: 'images/projects/weave_thumb.jpg',
    caption: 'Choice of material',
    desc: 'Hand-woven accessories',
    width: 1754,
    height: 1240
}];

galleries.fashion = [{
    src: 'images/sewing/1.jpg',
    thumb: 'images/sewing/1_thumb.jpg',
    caption: 'Sweatshirt',
    desc: 'Sewn from 2nd hand clothes',
    width: 1065,
    height: 900
}, {
    src: 'images/sewing/2.jpg',
    thumb: 'images/sewing/2_thumb.jpg',
    caption: 'Sweat coat',
    desc: 'Bathrobe inspired coat with snap buttons',
    width: 1307,
    height: 900
}, {
    src: 'images/sewing/3.jpg',
    thumb: 'images/sewing/3_thumb.jpg',
    caption: 'Anty shirt',
    desc: 'Shirt with ant print',
    width: 1171,
    height: 900
}, {
    src: 'images/sewing/5.jpg',
    thumb: 'images/sewing/5_thumb.jpg',
    caption: 'iPad cover',
    desc: ' .',
    width: 1569,
    height: 900
}, {
    src: 'images/sewing/IMG_2741.jpg',
    thumb: 'images/sewing/IMG_2741_thumb.jpg',
    caption: 'Dress collection',
    desc: 'Zero waste, hand-crafted dress',
    width: 1206,
    height: 900
}, {
    'src': 'images/sewing/sew1.jpg',
    'thumb': 'images/sewing/sew1_thumb.jpg',
    'caption': 'School project',
    'desc': 'Sustainable signature',
    'width': 2000,
    'height': 1614
}, {
    'src': 'images/sewing/transparentpic.jpg',
    'thumb': 'images/sewing/transparentpic_thumb.jpg',
    'caption': 'School project',
    'desc': 'Clothing collection for Le Klint',
    'width': 1365,
    'height': 1614
}, {
    src: 'images/prints/1.jpg',
    thumb: 'images/prints/1_thumb.jpg',
    caption: 'Octopus',
    desc: 'Print on cotton',
    width: 1518,
    height: 900

}, {
    src: 'images/prints/2.jpg',
    thumb: 'images/prints/2_thumb.jpg',
    caption: 'Potato fingers',
    desc: 'Print on cotton',
    width: 1315,
    height: 900
}, {
    src: 'images/prints/3.jpg',
    thumb: 'images/prints/3_thumb.jpg',
    caption: 'Gold bark',
    desc: 'Print on silk',
    width: 2043,
    height: 900
}, {
    src: 'images/prints/4.jpg',
    thumb: 'images/prints/4_thumb.jpg',
    caption: 'Owl \'s feather',
    desc: 'Print on silk',
    width: 2043,
    height: 900
}, {
    src: 'images/prints/5.jpg',
    thumb: 'images/prints/5_thumb.jpg',
    caption: 'Owl perception',
    desc: 'Print on cotton',
    width: 1174,
    height: 900
}, {
    src: 'images/prints/6.jpg',
    thumb: 'images/prints/6_thumb.jpg',
    caption: 'Dotty',
    desc: 'Print on cotton',
    width: 959,
    height: 900
}, {
    src: 'images/prints/7.jpg',
    thumb: 'images/prints/7_thumb.jpg',
    caption: 'Botanical',
    desc: 'Print on silk',
    width: 972,
    height: 900
}, {
    src: 'images/prints/8.jpg',
    thumb: 'images/prints/8_thumb.jpg',
    caption: 'Planty',
    desc: 'Print on cotton',
    width: 959,
    height: 900
}, {
    src: 'images/prints/11.jpg',
    thumb: 'images/prints/11_thumb.jpg',
    caption: 'Track jam',
    desc: 'Print project',
    width: 1195,
    height: 900
}];

galleries.trends = [{
    src: 'images/trends/1curious.jpg',
    thumb: 'images/trends/1curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2751,
    height: 1837,
}, {
    src: 'images/trends/2curious.jpg',
    thumb: 'images/trends/2curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2663,
    height: 1778,
}, {
    src: 'images/trends/3curious.jpg',
    thumb: 'images/trends/3curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2558,
    height: 1708,
}, {
    src: 'images/trends/4curious.jpg',
    thumb: 'images/trends/4curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2327,
    height: 1554,
}, {
    src: 'images/trends/5curious.jpg',
    thumb: 'images/trends/5curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2816,
    height: 1880,
}, {
    src: 'images/trends/6curious.jpg',
    thumb: 'images/trends/6curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2732,
    height: 1824,
}, {
    src: 'images/trends/7curious.jpg',
    thumb: 'images/trends/7curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2544,
    height: 1698,
}, {
    src: 'images/trends/8curious.jpg',
    thumb: 'images/trends/8curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2816,
    height: 1880,
}, {
    src: 'images/trends/9curious.jpg',
    thumb: 'images/trends/9curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2760,
    height: 1843,
}, {
    src: 'images/trends/10curious.jpg',
    thumb: 'images/trends/10curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2753,
    height: 1838,
}, {
    src: 'images/trends/11curious.jpg',
    thumb: 'images/trends/11curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 1880,
    height: 2816,
}, {
    src: 'images/trends/12curious.jpg',
    thumb: 'images/trends/12curious_thumb.jpg',
    caption: '',
    desc: '',
    width: 2428,
    height: 1620,
}];
