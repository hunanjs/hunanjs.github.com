/**
 * @author: admin
 * @description:
 * @Date: 2017/2/12 19:16
 */
(function($){
    'use strict'

    window.App = window.App || {}
    App.about = {

        init() {
            this.__initVue()
        },

        __initVue: function () {
            var self = this,
                allUserComponents = {
                    template: tplUserList,
                    props: ['allUserInfo']
                }

            var vm = new Vue({
                el: '#app',
                data: function () {
                    return {
                        hero: {}
                    }
                },
                components: {
                    'all-user-list': allUserComponents
                },
                created: function () {
                    this._setData()
                },
                methods: {
                    _setData: function () {
                        var self = this,
                            reqs = []
                         $.get('/data/hero.json',function (result) {
                             self['hero'] = result;
                         });
                    }
                }
            })
        },

    }

    App.about.init()

}(jQuery))