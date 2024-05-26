const router = require('express').Router();
let Forum = require('../models/forum.model');

router.route('/').get((req, res) => {
    User.find()
        .then(forums => res.json(forums))
        .catch(err => res.status(400).json('Error: ' +err))
});

router.route('/create').post((req, res) => {
    Forum.create(req.body)
        .then(forum => res.json(forum))
        .catch(err => res.json(err));
});

// Get a specific forum by ID
router.route('/:id').get((req, res) => {
    Forum.findById(req.params.id)
        .then(forum => res.json(forum))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Update a specific forum by ID
router.route('/update/:id').put((req, res) => {
    Forum.findById(req.params.id)
        .then(forum => {
            // update forum fields
            forum.userID = req.body.userID;
            forum.textForum = req.body.textForum;
            forum.comments = req.body.comments;
            forum.likes = req.body.likes;
            forum.likeCount = req.body.likeCount;
            forum.photoUrl = req.body.photoUrl;
            forum.videoUrl = req.body.videoUrl;

            forum.save()
                .then(() => res.json('Forum updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new comment to id
router.route('/add-comment/:id').post((req, res) => {
    const comment = new Forum(req.body);
    comment.save()
    .then(() => {
        Forum.findByIdAndUpdate(req.params.id, { $push: { comments: comment } })
            .then(() => res.json('Comment added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new like to id
router.route('/add-like/:id').post((req, res) => {
    const like = new ForumLike({ userID: req.body.userID });
    like.save()
        .then(() => {
            Forum.findByIdAndUpdate(req.params.id, { $push: { likes: like }, $inc: { likeCount: 1 } })
                .then(() => res.json('Like added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a specific forum by ID
router.route('/delete/:id').delete((req, res) => {
    Forum.findByIdAndDelete(req.params.id)
        .then(() => res.json('Forum deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// to add
// delete comment & like, access comment & like, access forum by userId

module.exports = router;