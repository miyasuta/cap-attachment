using { my.bookshop as my } from './data-model';
using { Attachments } from '@cap-js/attachments';

extend my.Books with { attachments: Composition of many Attachments }