/**
 * BPMN : Inclusive Gateway Shape
 *
 * @class
 * @extends OG.shape.GeomShape
 * @requires OG.common.*, OG.geometry.*
 *
 * @param {String} label 라벨
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
OG.shape.bpmn.G_Inclusive = function (label) {

	this.SHAPE_ID = 'OG.shape.bpmn.G_Inclusive';

	this.label = label;

	/**
	 * 드로잉할 Shape 을 생성하여 반환한다.
	 *
	 * @return {OG.geometry.Geometry} Shape 정보
	 * @override
	 */
	this.createShape = function () {
		var geom1, geom2, geomCollection = [];
		if (this.geom) {
			return this.geom;
		}

		geom1 = new OG.geometry.Polygon([
			[0, 50],
			[50, 100],
			[100, 50],
			[50, 0]
		]);

		geom2 = new OG.geometry.Circle([50, 50], 25);
		geom2.style = new OG.geometry.Style({
			"stroke-width": 3
		});

		geomCollection.push(geom1);
		geomCollection.push(geom2);

		this.geom = new OG.geometry.GeometryCollection(geomCollection);

		return this.geom;
	};

	/**
	 * Shape 을 복사하여 새로인 인스턴스로 반환한다.
	 *
	 * @return {OG.shape.IShape} 복사된 인스턴스
	 * @override
	 */
	this.clone = function () {
		return new OG.shape.bpmn.G_Inclusive(this.label);
	};
};
OG.shape.bpmn.G_Inclusive.prototype = new OG.shape.GeomShape();
OG.shape.bpmn.G_Inclusive.prototype.constructor = OG.shape.bpmn.G_Inclusive;
OG.G_Inclusive = OG.shape.bpmn.G_Inclusive;