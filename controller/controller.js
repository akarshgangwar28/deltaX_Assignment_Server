const Artist = require('../models/artist');
const Song = require('../models/song');

exports.saveSong =async (req, res) => {
    try {
        
        const song = new Song(req.body);
        await song.save();
        return res.json("Song saved");
    } catch(e) {
        res.status(422).json("Cannot save song");
    }
}

exports.saveArtist = (req, res) => {
    try {
        console.log("fty" + req.body);
        const artist = new Artist(req.body);
        artist.save();
        return res.json("Artist saved");
    } catch(e) {
        res.status(422).json("Cannot save artist");
    }
}