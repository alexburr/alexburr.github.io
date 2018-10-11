requirejs.config({
    baseUrl: 'public/js',
    paths: {
        'Implementations/SwingChordsApp':'app'
    }
});

requirejs(['Implementations/SwingChordsApp'], function(MyApp) {
    new MyApp.SwingChordsApp();
});