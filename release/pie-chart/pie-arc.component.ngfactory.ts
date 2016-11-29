/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/pie-chart/pie-arc.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/element_ref';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import12 from '@angular/common/src/directives/ng_if';
import * as import13 from '@angular/core/src/security';
import * as import14 from '../../../src/common/svg-linear-gradient.component';
import * as import15 from '../common/svg-linear-gradient.component.ngfactory';
import * as import16 from '../../../src/common/svg-radial-gradient.component';
import * as import17 from '../common/svg-radial-gradient.component.ngfactory';
export class Wrapper_PieArc {
  /*private*/ _eventHandler:Function;
  context:import0.PieArc;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  subscription0:any;
  constructor(p0:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.PieArc(p0);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_fill(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.fill = currValue;
      this._changes['fill'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_startAngle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.startAngle = currValue;
      this._changes['startAngle'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_endAngle(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.endAngle = currValue;
      this._changes['endAngle'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_innerRadius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.innerRadius = currValue;
      this._changes['innerRadius'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_outerRadius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.outerRadius = currValue;
      this._changes['outerRadius'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_cornerRadius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.cornerRadius = currValue;
      this._changes['cornerRadius'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_value(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.value = currValue;
      this._changes['value'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_max(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.max = currValue;
      this._changes['max'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_data(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.data = currValue;
      this._changes['data'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_explodeSlices(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.explodeSlices = currValue;
      this._changes['explodeSlices'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  check_animate(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_11,currValue))) {
      this._changed = true;
      this.context.animate = currValue;
      this._changes['animate'] = new import1.SimpleChange(this._expr_11,currValue);
      this._expr_11 = currValue;
    }
  }
  check_pointerEvents(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_12,currValue))) {
      this._changed = true;
      this.context.pointerEvents = currValue;
      this._changes['pointerEvents'] = new import1.SimpleChange(this._expr_12,currValue);
      this._expr_12 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.clickHandler.subscribe(_eventHandler.bind(view,'clickHandler'))); }
  }
}
var renderType_PieArc_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PieArc_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PieArc>;
  _PieArc_0_3:Wrapper_PieArc;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieArc_Host0,renderType_PieArc_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'pieArc',''),rootSelector,(null as any));
    this.compView_0 = new View_PieArc0(this.viewUtils,this,0,this._el_0);
    this._PieArc_0_3 = new Wrapper_PieArc(new import8.ElementRef(this._el_0));
    this.compView_0.create(this._PieArc_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PieArc_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PieArc) && (0 === requestNodeIndex))) { return this._PieArc_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._PieArc_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PieArc_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PieArcNgFactory:import7.ComponentFactory<import0.PieArc> = new import7.ComponentFactory<import0.PieArc>('g[pieArc]',View_PieArc_Host0,import0.PieArc);
const styles_PieArc:any[] = ([] as any[]);
var renderType_PieArc:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PieArc,{});
export class View_PieArc0 extends import2.AppView<import0.PieArc> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import9.ViewContainer;
  _TemplateRef_3_5:any;
  _NgIf_3_6:import10.Wrapper_NgIf;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieArc0,renderType_PieArc,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',new import3.InlineArray2(2,'class','arc-group'),(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import9.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import11.TemplateRef_(this,3,this._anchor_3);
    this._NgIf_3_6 = new import10.Wrapper_NgIf(this._vc_3.vcRef,this._TemplateRef_3_5);
    this._text_4 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_1,':svg:path',new import3.InlineArray2(2,'class','arc'),(null as any));
    this._text_6 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import12.NgIf) && (3 === requestNodeIndex))) { return this._NgIf_3_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.gradient;
    this._NgIf_3_6.check_ngIf(currVal_3_0_0,throwOnChange,false);
    this._NgIf_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    const currVal_11:any = this.context.path;
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementAttribute(this._el_5,'d',((currVal_11 == null)? (null as any): currVal_11.toString()));
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = 'pointer';
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementStyle(this._el_5,'cursor',((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_12) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_12).toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = (this.context.gradient? this.context.gradientFill: this.context.fill);
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_5,'fill',((currVal_13 == null)? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = (this.context.pointerEvents? 'auto': 'none');
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_5,'pointer-events',((this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_14) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import13.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_PieArc1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.click()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PieArc1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import2.AppView<import14.SvgLinearGradient>;
  _SvgLinearGradient_2_3:import15.Wrapper_SvgLinearGradient;
  _text_3:any;
  _el_4:any;
  compView_4:import2.AppView<import16.SvgRadialGradient>;
  _SvgRadialGradient_4_3:import17.Wrapper_SvgRadialGradient;
  _text_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_PieArc1,renderType_PieArc,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:defs',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':svg:g',new import3.InlineArray4(4,'orientation','vertical','svgLinearGradient',''),(null as any));
    this.compView_2 = new import15.View_SvgLinearGradient0(this.viewUtils,this,2,this._el_2);
    this._SvgLinearGradient_2_3 = new import15.Wrapper_SvgLinearGradient();
    this.compView_2.create(this._SvgLinearGradient_2_3.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,':svg:g',new import3.InlineArray4(4,'orientation','vertical','svgRadialGradient',''),(null as any));
    this.compView_4 = new import17.View_SvgRadialGradient0(this.viewUtils,this,4,this._el_4);
    this._SvgRadialGradient_4_3 = new import17.Wrapper_SvgRadialGradient();
    this.compView_4.create(this._SvgRadialGradient_4_3.context);
    this._text_5 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.SvgLinearGradient) && (2 === requestNodeIndex))) { return this._SvgLinearGradient_2_3.context; }
    if (((token === import16.SvgRadialGradient) && (4 === requestNodeIndex))) { return this._SvgRadialGradient_4_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = 'vertical';
    this._SvgLinearGradient_2_3.check_orientation(currVal_2_0_0,throwOnChange,false);
    const currVal_2_0_1:any = this.parentView.context.fill;
    this._SvgLinearGradient_2_3.check_color(currVal_2_0_1,throwOnChange,false);
    const currVal_2_0_2:any = this.parentView.context.linearGradientId;
    this._SvgLinearGradient_2_3.check_name(currVal_2_0_2,throwOnChange,false);
    const currVal_2_0_3:any = this.parentView.context.startOpacity;
    this._SvgLinearGradient_2_3.check_startOpacity(currVal_2_0_3,throwOnChange,false);
    if (this._SvgLinearGradient_2_3.ngDoCheck(this,this._el_2,throwOnChange)) { this.compView_2.markAsCheckOnce(); }
    const currVal_4_0_0:any = this.parentView.context.fill;
    this._SvgRadialGradient_4_3.check_color(currVal_4_0_0,throwOnChange,false);
    const currVal_4_0_1:any = this.parentView.context.radialGradientId;
    this._SvgRadialGradient_4_3.check_name(currVal_4_0_1,throwOnChange,false);
    const currVal_4_0_2:any = this.parentView.context.startOpacity;
    this._SvgRadialGradient_4_3.check_startOpacity(currVal_4_0_2,throwOnChange,false);
    if (this._SvgRadialGradient_4_3.ngDoCheck(this,this._el_4,throwOnChange)) { this.compView_4.markAsCheckOnce(); }
    this.compView_2.detectChanges(throwOnChange);
    this.compView_4.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
    this.compView_4.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}