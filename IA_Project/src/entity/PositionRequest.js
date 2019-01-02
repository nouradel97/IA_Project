"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Position_1 = require("./Position");
var User_1 = require("./User");
var PositionRequest = /** @class */ (function () {
    function PositionRequest() {
        this.isRejected = false;
    }
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Position_1.Position; }, { primary: true }),
        __metadata("design:type", Position_1.Position)
    ], PositionRequest.prototype, "positionId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, { primary: true }),
        __metadata("design:type", User_1.User)
    ], PositionRequest.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Boolean)
    ], PositionRequest.prototype, "isRejected", void 0);
    PositionRequest = __decorate([
        typeorm_1.Entity()
    ], PositionRequest);
    return PositionRequest;
}());
exports.PositionRequest = PositionRequest;
//# sourceMappingURL=PositionRequest.js.map