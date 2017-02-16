"use strict";
var core_1 = require("@angular/core");
var ItemsComponent = (function () {
    function ItemsComponent() {
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    }
    ItemsComponent.prototype.submit = function () {
        var value = this.maskedInput.nativeElement;
        console.log(value.text);
        alert("Date of Birth - " + value.text);
    };
    return ItemsComponent;
}());
__decorate([
    core_1.ViewChild("maskedInput"),
    __metadata("design:type", core_1.ElementRef)
], ItemsComponent.prototype, "maskedInput", void 0);
ItemsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        moduleId: module.id,
        templateUrl: "./items.component.html",
    })
], ItemsComponent);
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBeUU7QUFPekUsSUFBYSxjQUFjO0lBTDNCO1FBUVMsU0FBSSxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBUXBHLENBQUM7SUFMQywrQkFBTSxHQUFOO1FBQ0UsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsS0FBSyxDQUFDLGtCQUFrQixHQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVQyQjtJQUF6QixnQkFBUyxDQUFDLGFBQWEsQ0FBQzs4QkFBYyxpQkFBVTttREFBQztBQUZ2QyxjQUFjO0lBTDFCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtRQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtLQUN0QyxDQUFDO0dBQ1csY0FBYyxDQVcxQjtBQVhZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2l0ZW1zLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1zQ29tcG9uZW50IHtcblxuICBAVmlld0NoaWxkKFwibWFza2VkSW5wdXRcIikgbWFza2VkSW5wdXQ6IEVsZW1lbnRSZWY7XG4gIHB1YmxpYyBtYXNrID0gWycoJywgL1sxLTldLywgL1xcZC8sIC9cXGQvLCAnKScsICcgJywgL1xcZC8sIC9cXGQvLCAvXFxkLywgJy0nLCAvXFxkLywgL1xcZC8sIC9cXGQvLCAvXFxkL107XG4gIHB1YmxpYyBkYXRhO1xuXG4gIHN1Ym1pdCgpIHtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLm1hc2tlZElucHV0Lm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc29sZS5sb2codmFsdWUudGV4dCk7XG4gICAgYWxlcnQoXCJEYXRlIG9mIEJpcnRoIC0gXCIrdmFsdWUudGV4dCk7XG4gIH1cbn1cbiJdfQ==